export class Base {
    _id: string;
    base_id: number;
    name: string;
    address: string;
    color: string;
    contact: string;
    description: string;
    mu_number: number;
    phone: string;
    email: string;
    enterprise_info_id: number;
    area_id: number;
    area_code: string;
    altitude: number;
    villages_area_id: number | null;
    latlng: string;
    latlngBounds: string;
    /**'latlng': {
        'type': 'point';
        'coordinates': [ 
            40.4119603012534,
            115.911144912243
        ]
    };
    'latlngBounds': {
        'type': 'Polygon';
        'coordinates': [ 
            [ 
                40.4197735906623,
                115.905045568943
            ]
        ]
    }
*/
}