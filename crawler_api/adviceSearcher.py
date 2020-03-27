import selenium.webdriver as webdriver


def get_results(search_term):
    url = "https://www.startpage.com"
    #browser = webdriver.Chrome("drivers/chromedriver.exe")
    browser = webdriver.Firefox(executable_path='Data/geckodriver-v0.26.0-linux64/geckodriver')

    browser.get(url)
    search_box = browser.find_element_by_id("query")
    search_box.send_keys(search_term)
    search_box.submit()
    next = True
    results = set()
    while next:
        links = browser.find_elements_by_xpath("//section//div//a[@class='w-gl__result-url']")

        for link in links:
            href = link.get_attribute("href")
            results.add(href)

        try:
            browser.find_element_by_class_name("next").submit()
        except:
            next = False

    browser.quit()
    return results


# urls = get_results("lol")
# for url in urls:
#     print(url)