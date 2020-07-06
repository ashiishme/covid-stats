declare module Covid {
    interface Global {
        NewConfirmed: number;
        TotalConfirmed: number;
        NewDeaths: number;
        TotalDeaths: number;
        NewRecovered: number;
        TotalRecovered: number;
    }

    interface Country {
        CountryName: string;
        CountryCode: string;
        Slug: string;
        NewConfirmed: number;
        TotalConfirmed: number;
        NewDeaths: number;
        TotalDeaths: number;
        NewRecovered: number;
        TotalRecovered: number;
        Date: Date;
    }

    interface CovidStats {
        Global: Global[];
        Countries: Country[];
        Date: Date;
    }

    /**
     * Especially for Context API
     */

    interface GlobalStats {
        Global: Global[];
        Date: Date;
    }

    interface CountryStats {
        Country: Country[];
        Date: Date;
    }
}
