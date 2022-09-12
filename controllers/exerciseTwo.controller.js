/**
 * Display a listing of the resource.
 * @param {*} req request obtained
 * @param {*} res reponse to send
 * @returns 
 */
exports.create              = async (req, res, next) => {
    return res.render('index', { states: [], cities: []});
}

/**
 * Store a newly created resource in storage.
 * @param {*} req request obtained
 * @param {*} res reponse to send
 * @returns 
 */
exports.saveInfo            = async (req, res) => {
    const { info }          = req.body;
    const textArray         = info.split(' ');
    let numberOfWords       = 0;
    let textArrayTemp       = [];

    textArray.map((word) => {
        if(word.length > 0) {
            textArrayTemp.push(word);
            numberOfWords += 1;
        }    
    });

    const firstWord         = textArrayTemp[0];
    const lastWord          = textArrayTemp[numberOfWords -1];
    const reverseWords      = (textArrayTemp.reverse()).join(' ');

    const orderWords        = (textArrayTemp.sort());
    const ascendingWords    = orderWords.join(' ');
    const descendingWords   = (orderWords.reverse()).join(' ');
    
    return res.render('index',{ states: [], cities: [], values: { numberOfWords: numberOfWords, firstWord: firstWord, lastWord: lastWord, reverseWords: reverseWords, ascendingWords: ascendingWords, descendingWords:descendingWords}});
}