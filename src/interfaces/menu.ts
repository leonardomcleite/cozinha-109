export interface SubMenuInterface {
    name: string;
    pathname: string;
}

export interface MenuInterface {
    name: string;
    subMenus: Array<SubMenuInterface>;
}