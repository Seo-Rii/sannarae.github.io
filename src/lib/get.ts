const cache = new Map();

export async function getGroup(group: string) {
    if (cache.has(group)) {
        return cache.get(group);
    }
    const res = await fetch(`/work/${group}/index.json`).then(r => r.json());
    cache.set(group, res);
    return res;
}

export async function getOne(group: string, name: string) {
    const info = await getGroup(group);
    for (const item of info) {
        if (item.name === name) {
            return item;
        }
    }
}