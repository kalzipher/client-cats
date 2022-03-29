export interface ICatImage {
    id: string;
    url: string;
}

export interface ISaveCatImageFavorite {
    image_id: string
}

export interface ISaveCatResponse {
    id: number | string;
    message: string;
}

export interface ICat {
    id: string;
    name: string;
    breed: string;
    age: number;
    photo: string;
}

export type ICatSave = Omit<ICat, "id">;

export interface ICatFavorite {
    created_at: Date;
    id:         number;
    image:      ICatFavoriteImage;
    image_id:   string;
    sub_id:     null;
    user_id:    string;
}

export interface ICatFavoriteImage {
    id:  string;
    url: string;
}
