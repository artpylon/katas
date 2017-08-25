/*
Return true/false whether the needle string is contained within a larger
haystack string
*/

function isSubString(needle, haystack) {
    const len = needle.length
    const segmentArr = []
    const loops = haystack.length - len + 1
    let result = false
    for (var i = 0; i < loops; i++) {
        var end = i + len
        var segment = haystack.slice(i, end)
        if (needle === segment) {
          result = !result
          break;
        }
    }
    return result
}
