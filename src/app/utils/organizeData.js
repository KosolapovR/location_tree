export function organizeData(jsonData) {
    //находим корневой элемент
    let root = jsonData.filter(el => el.parent_id === null)[0];
    let organizedData = {root: {id: root.id, title: root.title}};

    //добавляем корневому элементу первых потомков
    organizedData.root.federalDistricts = jsonData
        .filter(el => el.parent_id === root.id)
        .sort((el1, el2) => el1.srt - el2.srt);

    //каждому потомку добавляем вторых потомков
    organizedData.root.federalDistricts.forEach((federalDistrict) => {
        federalDistrict.regions = jsonData
            .filter(el => el.parent_id === federalDistrict.id)
            .sort((el1, el2) => el1.srt - el2.srt);
    });

    return organizedData;
}