import axios from 'axios'

const baseUrl = 'http://choreographiccoding.org'

const getEntities = (type = 'node', params = {}, pager = undefined) => {
  return axios.get(urlWithPager(`${baseUrl}/${type}.json`, pager), {params: params})
}

const getEntityByID = function (type = 'node', id) {
  return axios.get(`${baseUrl}/${type}/${id}.json`)
}

const urlWithPager = function (url, pager) {
  if (pager && pager.page) {
    return url + `?page=${pager.page}`
  } else if (pager && pager.items_per_page) {
    return url + `?items_per_page=${pager.items_per_page}`
  }
  return url
}

const getImgPath = async function (fileId) {
  let imgJson = await axios.get(`${baseUrl}/api/files/${fileId}`)
  return imgJson.files[0].file
}

export default {
  namespaced: true,
  state: {},
  mutations: {
  },
  getters: {},
  actions: {
    getEntities: getEntities,
    getEntity: getEntityByID,
    getNodes: (commit, pager) => getEntities('node', {}, pager),
    getNode: (commit, id) => getEntityByID('node', id),
    getLabs: (commit, pager) => getEntities('node', {type: 'lab'}, pager),
    getLab: (commit, id) => getEntityByID('node', id),
    getProjects: (commit, pager) => getEntities('node', {type: 'project'}, pager),
    getProject: (commit, id) => getEntityByID('node', id),
    getPages: (commit, pager) => getEntities('node', {type: 'page'}, pager),
    getPage: (commit, id) => getEntityByID('node', id),
    getUsers: (commit, pager) => getEntities('user', {}, pager),
    getUser: (commit, id) => getEntityByID('user', id),
    getTerms: (commit, pager) => getEntities('taxonomy_term', {}, pager),
    getTerm: (commit, id) => getEntityByID('taxonomy_term', id),
    getVocabularies: (commit, pager) => getEntities('taxonomy_vocabulary', {}, pager),
    getVocabulary: (commit, id) => getEntityByID('taxonomy_vocabulary', id),

    getFiles: (commit, pager) => axios.get(urlWithPager(`${baseUrl}/files/all.json`, pager)),
    getFile: (commit, id) => axios.get(`${baseUrl}/files/${id}/file.json`),

    getImgPath: getImgPath
  }
}
