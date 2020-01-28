class ClientDataStore {
  constructor() {
    this.data = {};
  }

  put(key,value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }
}

export default new ClientDataStore();
