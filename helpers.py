import pycountry

def get_iso3(country_name):
    try:
        return pycountry.countries.lookup(country_name).alpha_3
    except:
        return None



if __name__ == "__main__":
    print(get_iso3('China'))
    print(get_iso3('United States'))
    print(get_iso3('Russia'))
    print(get_iso3('Japan'))
    print(get_iso3('Germany'))
    print(get_iso3('India'))
    print(get_iso3('United Kingdom'))
    print(get_iso3('Saudi Arabia'))
    print(get_iso3('Iran'))
    print(get_iso3('France'))