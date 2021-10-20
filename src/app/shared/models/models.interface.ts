
export interface orgVentasModel{
    I_BUKRS: string;
}

export interface orgVentasResponseModel{
    MANDT: string;
    REGION: string;
    CODGPAIS: string;
    VKORG: string;
    BUKRS: string;
    DESCRIPREGIO: string;
    VTEXT: string;
}

export interface centrosModel{
    P_SOCIEDAD: string;
    P_ORG_VTA: string;
}

export interface centrosResponseModel{

}

export interface dealersModel{
    IM_VKORG: string;
    IM_VTWEG: string;
    IM_SPART: string;
    IM_VWERK: string;
}

export interface eliminarConsultorModel{
    CODCONSULT: string;
    IM_SOCIEDAD: string;
}
export interface eliminarConsultorResponseModel{
    MESSAGE: string;
}

