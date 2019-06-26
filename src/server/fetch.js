import Vue from 'vue'
import axios from 'axios'
import listApis from './api.js'
import FetchMock from './mock'

var apiPrefix = process.env.NODE_ENV === 'production' ? '' : '/api'

Util.getMapUrl = function (url) {
  return `${apiPrefix}/map/${url}`
}
Util.formatApi = function (url) {
  return `${apiPrefix}${url}`
}
var Test = !1,
  Service = {},
  axiosObj = axios.create({
    timeout: 30000
  })

axiosObj.interceptors.request.use((config) => {
  return config
}, (error) => {
  Message({
    message: '错误的传参',
    type: 'error',
    duration: 1000
  })
  Promise.reject(error)
})
axiosObj.interceptors.response.use(response => {
  return new Promise((resolve, reject) => {
    const res = response.data
    if (res.retCode !== 1) {
      if (res.retCode === -1) {
        var err = res.err || '你已被登出，继续操作，请重新登录'
        return MessageBox.alert(err, '提示', {
          confirmButtonText: '重新登录',
          callback: action => {
          }
        })
      } else if (res.retCode === -2) {
        return false
      }
      reject(res)
    } else {
      resolve(res)
    }
  })
}, err => {
  return Promise.reject(err)
})

function formatURL(URL, params) {
  var reg = /\/\{(.+?)\}/g
  if (reg.test(URL)) {
    return URL.replace(reg, ($0, $1) => {
      return '/' + params[$1]
    })
  }
  return URL
}

listApis(apiPrefix).forEach((v) => {
  if (Service[v[0]]) {
    Message('接口名称:' + v[0] + '已被占用，请修改！', 'fail')
    return false
  }
  Service[v[0]] = (params) => {
    var settings = {
      url: formatURL(v[1], params) + '.do',
      method: v[2] || 'POST',
      data: params || {}
    }

    if (v[3] === 'blob') {
      settings.responseType = v[3]
    }
    return Test ? FetchMock(v[0], settings) : axiosObj(settings)
  }
})

export default window.Service = Service
