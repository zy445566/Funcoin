const interfaces = require('os').networkInterfaces();
const ruleoutIp = [
    [this.getIdNumberByIp('10.0.0.0'),this.getIdNumberByIp('10.255.255.255')],
    [this.getIdNumberByIp('172.16.0.0'),this.getIdNumberByIp('172.31.255.255')],
    [this.getIdNumberByIp('192.168.0.0'),this.getIdNumberByIp('192.168.255.255')],
    [this.getIdNumberByIp('127.0.0.1'),this.getIdNumberByIp('127.0.0.1')]
];
const ipAMax = 256*256*256*256;
const ipBMax = 256*256*256;
const ipCMax = 256*256;
const ipDMax = 256;
class NetFind{
    ping()
    {

    }

    store()
    {

    }

    findNode()
    {

    }

    findValue()
    {

    }

    randomIdNumber()
    {
        let idNumber = Math.floor(Math.random()*ipAMax);
        for(let ipBlock of ruleoutIp)
        {
            if (ipBlock[0] <= idNumber && idNumber <= ipBlock[0])
            {
                return this.randomIdNumber();
            }
        }
        return idNumber;
    }

    getIpByIdNumber(idNumber)
    {
        let ipArray = [];
        while (idNumber>=256)
        {
            ipArray.unshift(idNumber%256);
            idNumber = Math.floor(idNumber/256);
        }
        ipArray.unshift(idNumber);
        return ipArray.join(".");
    }

    getIdNumberByIp(ip)
    {
        let ipArray = ip.split('.');
        let idNumber = ipArray[0]*ipBMax+ipArray[1]*ipCMax+ipArray[2]**ipDMax+ipArray[3];
        return idNumber;
    }

    static getSelfIp()
    {
        for(let devName in interfaces){  
                let iface = interfaces[devName];  
                for(let alias of iface){  
                    if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                            return alias.address;  
                    }  
                }  
        }
        return '127.0.0.1';
    }
}

module.exports = NetFind;