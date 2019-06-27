import axios from 'axios'
import listApis from './api.js'
import FetchMock from './mock'

/* function getMapUrl(url) {
  return `${apiPrefix}/map/${url}`
}
function formatApi (url) {
  return `${apiPrefix}${url}`
} */
const BASEURL = ' https://easy-mock.com/mock/5d11e933efa54066689f423c/SmileVue'
let apiPrefix = process.env.NODE_ENV === 'production' ? BASEURL : BASEURL,
  Test = !1,
  Service = {},
  axiosObj = axios.create({ timeout: 30000 })

axiosObj.interceptors.request.use((config) => {
  return config
}, (error) => {
  Promise.reject(error)
})
axiosObj.interceptors.response.use(response => {
  return new Promise((resolve, reject) => {
    let {
      data: {
        data,
        retCode
      }
    } = response
    console.log(retCode)
    if (retCode === 1) {
      resolve(data)
    } else {
      reject(data)
      // var err = res.err || '你已被登出，继续操作，请重新登录'
      /* return MessageBox.alert(err, '提示', {
        confirmButtonText: '重新登录',
        callback: action => {
        }
      }) */
    }
  })
}, err => {
  console.log(err)
  return Promise.reject(err)
})

function formatURL (URL, params) {
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
    // Message('接口名称:' + v[0] + '已被占用，请修改！', 'fail')
    return false
  }
  Service[v[0]] = (params) => {
    var settings = {
      url: formatURL(v[1], params),
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
