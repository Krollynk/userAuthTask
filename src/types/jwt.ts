export interface JwtPayloadCustom {
    id: number;
    email: string;
    rol: string;
    iat?: number;
    exp?: number;
}