export default class Json {
  static defaultParams = {
    color1: '#54cb64',
    color2: '#07b91f'
  }

  run (value) {
    return JSON.parse(value)
  }
}
