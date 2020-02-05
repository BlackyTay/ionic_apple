import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Store value
  async store(storeKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storeKey,
      value: encryptedValue
    });
  }

  //Get value
  async get(storageKey: string) {
    const ret = await Storage.get({
      key: storageKey
    });
    return JSON.parse(unescape(atob(ret.value)));
  }

  async removeStorageItem(storageKey: string) {
    await Storage.remove({
      key: storageKey
    });
  }

  async clear() {
    await Storage.clear();
  }
}
