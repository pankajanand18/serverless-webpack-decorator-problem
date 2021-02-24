import 'reflect-metadata'
import {DateProperty, Model, PartitionKey, Property, SortKey} from "@shiftcoders/dynamo-easy";


@Model({tableName: 'user-data-store'})
export class User {

    // example of value: userEmail:test@realself.com
    @PartitionKey()
    @Property({name: 'unique_id'})
    userEmail: string

    // example of value: ShopPromoCode:ve-1020-promo-codes-dr-profile
    @SortKey()
    @Property({name: 'sort_key'})
    feature: string
    @Property({name: 'lead_id'})
    leadId: string
    @DateProperty({name: 'created'})
    created: Date
    @DateProperty({name: 'last_updated'})
    lastUpdated?: Date

    constructor(userEmail: string, feature: string, leadId: string) {
        this.userEmail = userEmail
        this.feature = feature
        this.leadId = leadId
    }
}