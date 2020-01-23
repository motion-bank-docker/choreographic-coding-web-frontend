import axios from 'axios'

const baseUrl = 'https://ccl-api.motionbank.org'

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

const getImgPath = function (fileId) {
  let imgJson = axios.get(`${baseUrl}/api/v1/files/${fileId}`)
  return imgJson
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
    getNodeGeoLocations: (commit, pager) => getEntities('api/v1/geolocations', {}, pager),
    getLabs: (commit, pager) => getEntities('api/v1/labs', {}, pager),
    getLab: (commit, id) => getEntityByID('api/v1/lab', id),
    getLabParticipants: (commit, id) => getEntityByID('api/v1/lab-participants', id),
    getProjects: (commit, pager) => getEntities('node', {type: 'project'}, pager),
    getProject: (commit, id) => getEntityByID('node', id),
    getPages: (commit, pager) => getEntities('node', {type: 'page'}, pager),
    getPage: (commit, id) => getEntityByID('node', id),
    getCalls: (commit, pager) => getEntities('node', {type: 'call'}, pager),
    getCall: (commit, id) => getEntityByID('node', id),
    getShowcases: (commit, pager) => getEntities('node', {type: 'showcase'}, pager),
    getShowcase: (commit, id) => getEntityByID('node', id),
    getUsers: (commit, pager) => getEntities('user', {}, pager),
    getUserGeoLocations: (commit, pager) => getEntities('/api/v1/user-geolocations', {}, pager),
    getUser: (commit, id) => getEntityByID('user', id),
    getTerms: (commit, pager) => getEntities('taxonomy_term', {}, pager),
    getTerm: (commit, id) => getEntityByID('taxonomy_term', id),
    getVocabularies: (commit, pager) => getEntities('taxonomy_vocabulary', {}, pager),
    getVocabulary: (commit, id) => getEntityByID('taxonomy_vocabulary', id),

    getFiles: (commit, pager) => axios.get(urlWithPager(`${baseUrl}/files/all.json`, pager)),
    getFile: (commit, id) => axios.get(`${baseUrl}/files/${id}/file.json`),

    getImgPath: (commit, id) => getImgPath(id)
  }
}
