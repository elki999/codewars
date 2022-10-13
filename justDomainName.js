//no empty strings.  only urls, strings
//remove http(s); //; www; 
//split string, need portion before dot

function parseDomainName(url) {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0]

}