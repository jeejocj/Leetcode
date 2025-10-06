/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = 'aeiou'
    let map1 = {}
    let map2 = {}
    let vow = []
    let con = []

    for (let char of s) {
        if (vowels.includes(char)) {
            vow.push(char)
        } else {
            con.push(char)
        }
    }

    for (let v of vow) {
        if (map1[v]) {
            map1[v]++

        } else {
            map1[v] = 1
        }
    }


    let h1 = 0
    let h2 = 0

    for (let key in map1) {
        if (map1[key] > h1) {
            h1 = map1[key]
        }
    }

    for (let c of con) {
        if (map2[c]) {

            map2[c]++
        } else {
            map2[c] = 1
        }

    }

    for (let key in map2) {
        if (map2[key] > h2) {
            h2 = map2[key]
        }
    }
    return h1 + h2
};