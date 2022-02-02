import encode from './encode.mjs'
import decode from './decode.mjs'

const SHORT_HASH = 'K8ksyUm1UvBIzcnJVwjPL8pJAQA='

const SHORT_MARKUP = 'title: Hello World'

const LONG_HASH =
  'bVGxTsMwEN39FTdCRNo9QxfECB1aiQGh5ORckhOOr9hO0wjx75xLqUBie3r2u/fuXeLkqIJnclZGgiQQZx4deoorFmPM1hOUG9jPUsEjxYg9GeMlUWWK4vffogCOgBB5PDgC8Y59HigOOglgA2Fi30Md6X0ibwlaxj7gGOuVMQ8tJ0iDCuiUcoyMHXVnPB1aTHSmLhpVFMW9HJYzOQWn7jk7HtU5QBww/Pl/B3XOrBSmHwnYAX1PEeaBPB0pwCLTP1453jZAs+PeA3v46LCMikv2Jbr02WTn83oE6AGtlcknhS1YcY6sYudAujw/XLfWqUZbvZa71/jkugtZbpQeAult6idJ3LHV+sTXV5EepoJG3prLOWBHBEXx0k1qFhef8ASiWx2Z5tebda8ZKCzr/Fx+P99qafk0o2hZLSVkF78A'

const LONG_MARKUP = `title: Welcome to swimlanes.io


One -> Two: Message

note:
**swimlanes.io** is a simple online tool for creating _sequence diagrams_.

Edit the text to the left to update the diagram.

**Copy the url** to save or share the diagram, _note that the url changes whenever you update the diagram_.

Or \`Sign in {fa-sign-in-alt}\` to create an account and collect all of your diagrams.


Two -> Two: To self

Two -->> Three: _Notification_

Two -> One: \`ok\`

note: See **[full syntax overview](/gallery/full-syntax)** for more details`

describe('encode()', () => {
  it('works on sort documents', () => {
    expect(encode(SHORT_MARKUP)).toBe(SHORT_HASH)
  })

  it('works on longer documents', () => {
    expect(encode(LONG_MARKUP)).toBe(LONG_HASH)
  })
})

describe('decode()', () => {
  it('works on short documents', () => {
    expect(decode(SHORT_HASH)).toBe(SHORT_MARKUP)
  })

  it('works on longer documents', () => {
    expect(decode(LONG_HASH)).toBe(LONG_MARKUP)
  })
})

describe('encode(decode())', () => {
  it('works on short documents', () => {
    expect(encode(decode(SHORT_HASH))).toBe(SHORT_HASH)
  })

  it('works on longer documents', () => {
    expect(encode(decode(LONG_HASH))).toBe(LONG_HASH)
  })
})

describe('decode(encode())', () => {
  it('works on short documents', () => {
    expect(decode(encode(SHORT_MARKUP))).toBe(SHORT_MARKUP)
  })

  it('works on longer documents', () => {
    expect(decode(encode(LONG_MARKUP))).toBe(LONG_MARKUP)
  })
})
