const ReportModel = {
  namespace: 'report',
  state: {},

  reducers: {
    addComp(state = {}, action: { payload: any }) {
      const { payload } = action;
      console.log('1111111', payload);
      return { ...state, ...payload };
    },
  },
};

export default ReportModel;
