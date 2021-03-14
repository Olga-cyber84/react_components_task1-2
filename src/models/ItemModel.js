export class ItemModel {
    constructor(entity) {
        Object.assign(this, {
            brand: 'brand name',
            title: 'title',
            description: 'description',
            descriptionFull: 'full description',
            price: 0,
            currency: '£'
        }, entity)
    }
}