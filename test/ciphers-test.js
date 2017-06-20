
describe('caesarEncode(text, shift)', function() {
  it('receives a string of text and an integer for alphabetic shifting. Shifts each letter down that amount to return encrypted string', function() {
    expect(caesarEncode("cat", 3)).toEqual("fdw")
    expect(caesarEncode("number one", 5)).toEqual("szrgjw tsj")
  })
})

describe('caesarEncode(text, shift)', function() {
  it('loops around at the end of the alphabet to continue shifting', function() {
    expect(caesarEncode("fuzzy", 10)).toEqual("pejji")
    expect(caesarEncode("xylophone", 15)).toEqual("mnadewdct")
  })
})

describe('caesarEncode(text, shift)', function() {
  it('maintains proper capitalization and punctuation, and does not change numbers', function() {
    expect(caesarEncode("My favorite number is 29!", 10)).toEqual("Xj qlgzctep yfxmpc td 29!")
    expect(caesarEncode("What is the capital of Argentina?", 19)).toEqual("Patm bl max vtibmte hy Tkzxgmbgt?")
  })
})

describe('caesarDecode(text, shift)', function() {
  it('takes in a string and an integer and decodes the string using the caesar cipher algorithm', function() {
    expect(caesarDecode("Pxevhfx mh Fbtfb", 19)).toEqual("Welcome to Miami")
    expect(caesarDecode("Cjfowfojept b Njbnj", 1)).toEqual("Bienvenidos a Miami")
  })
})

describe('atbashEncode(text)', function() {
  it('encodes a string using the atbash cipher', function() {
    expect(atbashEncode("This is the best day ever")).toEqual("Gsrh rh gsv yvhg wzb vevi")
    expect(atbashEncode("number one", 5)).toEqual("I'm hungry")
  })
})

describe('keywordEncode(text, keyword)', function() {
  it('encodes a string using the keyword cipher - takes in a string of text to encode and a keyword to serve as the key ', function() {
    expect(keywordEncode("this is a secret message for your eyes only", "losangeles")).toEqual("tbcr cr l rnsqnt inrrlen gkq ykuq nynr kjhy")
    expect(keywordEncode("today is karlies birthday", "kloss")).toEqual("tmsky er gkqhear leqtdsky")
  })
})

describe('keywordDecode(text, keyword)', function() {
  it('decodes a string using the keyword cipher - takes in a string of text to decode and a keyword to serve as the key ', function() {
    expect(keywordDecode("iqudhptirph trdpkahi", "pencil")).toEqual("equilateral triangle")
    expect(keywordDecode("b gluw qltmq skd qsgsdq", "sandwich")).toEqual("i love soups and salads")
  })
})
