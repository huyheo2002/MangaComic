import React from "react";

const GlobalContext = React.createContext({
    // Calendar
    monthIndex: 0,
    setMonthIndex: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showModal: false,
    setShowModal: (show) => {},
    dispatchCallEvent: ({type, payload}) => {},
    dataDate: null,
    setDataDate: () => {},
    arrDataDate: null,
    setArrDataDate: () => {},
    sendTitle: null,
    setSendTitle: () => {},
    sendDesc: null,
    setSendDesc: () => {},

    // combobox
    nameCombobox: "",
    setNameCombobox: () => {},

    // news detail
    newsDetail: null,
    setNewsDetail: () => {},

    // comments 
    fetchApiComment: false,
    setFetchApiComment: () => {},

})

export default GlobalContext;