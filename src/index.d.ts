export interface NavigationItem {
    name: string;
    url: string;
    childs: NavigationItem[];
};

export interface Navigation {
    name: string;
    childs: NavigationItem[];
};

export interface NavigationItemFields {
    [key: string]: any;
}

export interface NavigationFields {
    name: string;
    items: NavigationItemFields[];
};