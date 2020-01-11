class SwapiService {
  async getResource() {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Colud not fetch ${ur}` + `, received ${res.status}`);
    }
    return await res.json();
  }
}
