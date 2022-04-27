function stringClean(s){
    const regex = /[0-9]/gi
    return s.replace(regex, "")
}