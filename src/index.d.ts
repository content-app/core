export interface NavigationItem {
    name: string;
    url: string;
    childs: NavigationItem[];
    page: any;
    entry: any;
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

export interface Seo {
    title: string;
    description: string;
    keywords: string;
};

export interface Article {
    title: string;
    modules?: any[];
}

export interface Page {
    title: string;
    pageTitle: string;
    slug: string;
    seo?: Seo;
    articles?: Article[];
};