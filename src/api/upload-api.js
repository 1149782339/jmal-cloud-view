import request from '@/utils/request'
const qs = require('qs')

export default {
  // 上传
  simpleUploadURL: process.env.VUE_APP_BASE_API + '/upload',
  // 上传头像
  simpleUploadAvatarURL: process.env.VUE_APP_BASE_API + '/upload',
  // 合并
  mergeSimpleUpload: function(params) {
    return request({
      url: 'merge',
      method: 'post',
      params
    })
  },
  uploadFolder: function(params) {
    return request({
      url: 'upload-folder',
      method: 'post',
      params,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })
  },
  // 文件列表
  fileList: function(params) {
    return request({
      url: 'list',
      method: 'get',
      params
    })
  },
  // 收藏/取消收藏
  favoriteUrl: function(params) {
    const isFavorite = params.isFavorite
    if (isFavorite) {
      return request({
        url: 'favorite',
        method: 'post',
        params
      })
    } else {
      return request({
        url: 'unFavorite',
        method: 'post',
        params
      })
    }
  },
  // 删除
  delete: function(params) {
    return request({
      url: 'delete',
      method: 'delete',
      params,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })
  },
  // 重名名
  rename: function(params) {
    return request({
      url: 'rename',
      method: 'get',
      params
    })
  },
  // 搜索文件🔍
  searchFile: function(params) {
    return request({
      url: 'search-file',
      method: 'get',
      params
    })
  },
  // 搜索文件🔍-打开目录
  searchFileAndOpenDir: function(params) {
    return request({
      url: 'search-file-open',
      method: 'get',
      params
    })
  },
  // 查找下级目录
  queryFileTree: function(params) {
    return request({
      url: 'query-file-tree',
      method: 'get',
      params
    })
  },
  // 移动文件/文件夹
  move: function(params) {
    return request({
      url: 'move',
      method: 'get',
      params,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })
  },
  // 复制文件/文件夹
  copy: function(params) {
    return request({
      url: 'copy',
      method: 'get',
      params,
      paramsSerializer: function(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })
  },
  // 上传文档里的图片
  uploadImage: function(data) {
    return request({
      url: 'upload-markdown-image',
      method: 'post',
      data: data
    })
  },
  // 生成分享链接
  generate: function(data) {
    return request({
      url: 'share/generate',
      method: 'post',
      data: data
    })
  },
  // 访问分享链接
  accessShare: function(params) {
    return request({
      url: 'public/access-share',
      method: 'get',
      params
    })
  },
  // 访问分享链接里的文件夹
  accessShareOpenDir: function(params) {
    return request({
      url: 'public/access-share/open',
      method: 'get',
      params
    })
  },
}
