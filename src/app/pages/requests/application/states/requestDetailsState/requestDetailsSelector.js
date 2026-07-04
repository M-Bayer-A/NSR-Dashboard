export const requestDetailSelector = {
  navigate: {
    nextID: (state) => state.requestDetails.navigate.nextRequestID,
    previousID: (state) => state.requestDetails.navigate.previousRequestID,
  },

  info: {
    id: (state) => state.requestDetails.requestInfo.id,
    status: (state) => state.requestDetails.requestInfo.requestStatus,
    creator: (state) => state.requestDetails.requestInfo.creator,
    worker: (state) => state.requestDetails.requestInfo.worker,
    importance: (state) => state.requestDetails.requestInfo.importance,
    type: (state) => state.requestDetails.requestInfo.type,
    unit: (state) => state.requestDetails.requestInfo.unit,
    floor: (state) => state.requestDetails.requestInfo.floor,
    suite: (state) => state.requestDetails.requestInfo.suite,
    room: (state) => state.requestDetails.requestInfo.room,
    createDate: (state) => state.requestDetails.requestInfo.createDate,
    lastUpdateDate: (state) => state.requestDetails.requestInfo.lastUpdateDate,
  },

  history: (state) => state.requestDetails.requestHistory,

  problem: {
    title: (state) => state.requestDetails.problemDetails.title,
    notes: (state) => state.requestDetails.problemDetails.notes,
    photos: (state) => state.requestDetails.problemDetails.photos,
  },

  solution: {
    notes: (state) => state.requestDetails.solutionDetails.notes,
    photos: (state) => state.requestDetails.solutionDetails.photos,
  },

  usedMaterials: (state) => state.requestDetails.usedMaterials,

  rejectRequestPopup: {
    reason: (state) => state.requestDetails.rejectRequestPopup.reasone,
  },
  loading: {},
  isOpen: {
    rejectRequestPopup: (state) =>
      state.requestDetails.isOpen.rejectRequestPopup,
  },
};
