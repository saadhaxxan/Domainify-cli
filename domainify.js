#!/usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');
const fs = require('fs');

commander.version = ('1.0.0');

var new_domain = ['app','site','online','xyz','tech','shop','blog','space','live','life','website','news','ninja','solutions','expert','services','media','rocks','company','guru','club','today','agency','technology','tips','center','link','click','ltd','win','work']
var common_domain = ['com','edu','net','org','site','co','io','ai','app','ca','uk','ua','us','ru','ch']
var extra_domain =["asia","africa","us","me","biz","info","name","mobi","cc","tv","ly","it","to","eu","ch","online"]
var prefix_domain = ['a','i','e','the','my','me','we','top','best','get','co','nu','up','new','live','bestof','meta','just','99','101','insta','try','hit','go','re','dr','mr','bit','net','hot','beta','you','our','x','buy','for','pro','ez','on','v','hd','max','digi','free','very','all','easy','cool','air','next','find','uber']
var suffix_domain = ["online.com","world.com","io.com","me.com","you.com","up.com","new.com","blog.com","web.com","hd.com","hq.com","tip.com","tips.com","guru.com","link.com","sumo.com","mob.com","lab.com","labs.com","list.com","info.com","jar.com","egg.com","site.com","app.com","apps.com","net.com","inc.com","247.com","360.com","24x7.com","corp.com","page.com","llc.com","now.com","all.com","box.com","base.com","zone.com","zoom.com","bit.com","bits.com","byte.com","bros.com","cart.com","sale.com","shop.com","store.com","free.com","soft.com","101.com","center.com","pro.com","pros.com","co.com","space.com","hub.com","spot.com","ware.com","talk.com","place.com","kit.com","pad.com","tool.com","bot.com","bots.com","bee.com","doc.com",".com","al.com","ity.com","iput.com","ally.com","ality.com","alness.com","ipital.com"]
var sub_domain = ["account","adwords","afp","answers","api","app","bbs","blog","blogsearch","books","checkout","clients","clients1","cloud","code","dashboard","desktop","dev","dl","dns1","dns2","docs","earth","email","feedproxy","finance","forum","ftp","fusion","gmail","groups","host","images","mail","mail1","mail2","mailin1","mailin2","mailserver","manage","maps","mx","mx0","mx01","mx1","mx2","mx7","my","news","ns","ns1","ns2","ns3","ns4","owa","pack","partnerpage","picasa","picasaweb","pop","portal","r.1","r.2","r.3","redbusprimarydns","redbussecondarydns","remote","scholar","secure","secure","server","services","shop","sites","sketchup","smtp","spreadsheets","suggestqueries","support","talkgadget","test","toolbar","translate","video","video-stats.video","vpn","web","webmail","ww1","www"]
// CLI
function generatecommondomains(name){
        var new_name = name.split(" ").join(" ");
        var new_list = common_domain.map(function (d)
        {
            return `${new_name}.${d}`
        });
        console.log(chalk.white.bgBlue('Common Domain Names'))
        console.log(new_list)
}
function generateAllDomains(name){
	var new_name = name.split(" ").join("");
 var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
 var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
 var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
 var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
 var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
 var all_list = {'common domains':common_list,
 'extra domains':extra_list,
 'new domains':new_list,
 'prefix domains':prefix_list,
 'suffix domains':suffix_list}
 console.log(chalk.white.bgBlue.bold('All Possible Domain Names'))
 console.log(all_list)
}
function generateAndSaveDomains(name){
	var new_name = name.split(" ").join("");
 var new_list = new_domain.map(function(d){return `${new_name}.${d}`});
 var common_list = common_domain.map(function(d){return `${new_name}.${d}`});
 var extra_list = extra_domain.map(function(d){return `${new_name}.${d}`});
 var prefix_list = prefix_domain.map(function(d){return `${d}${new_name}.com`});
 var suffix_list = suffix_domain.map(function(d){return `${new_name}${d}`});
 var all_list = {'common domains':common_list,
 'extra domains':extra_list,
 'new domains':new_list,
 'prefix domains':prefix_list,
 'suffix domains':suffix_list}
 console.log(chalk.white.bgBlue.bold('All Possible Domain Names'))
 console.log(all_list)
 var filename = new_name + '_domains' + '.json'
 fs.writeFile(filename, JSON.stringify(all_list),'utf8', function (err) {
  if (err) throw err;
  console.log(chalk.white.bgBlue('Saved! to file'));
});
}

function generatenewdomains(name){
    var new_name = name.split(" ").join(" ");
    var new_list = new_domain.map(function (d)
    {
        return `${new_name}.${d}`
    });
    console.log(chalk.white.bgBlue('New Domain Names'))
    console.log(new_list)
}

function generateSubDomains(name){
    var new_name = name.split(" ").join("");
     var new_list = sub_domain.map(function(d){return `${d}.${new_name}.com`});
    console.log(chalk.white.bgBlue('Sub Domain Names'))
     console.log(new_list)
    }
    
function generateSuffixDomains(name){
    var new_name = name.split(" ").join("");
     var new_list = suffix_domain.map(function(d){return `${new_name}${d}`});
     console.log(chalk.white.bgBlue('Suffixed Domain Names'))
     console.log(new_list)
    }

commander
.command('generateall <name>')
.description('Generate All Domain Names')
.alias('g-all')
.action(function (name)
        {
            generateAllDomains(name)
        })
        commander
.command('generate <name>')
.description('Generate Domain Names')
.alias('g')
.action(function (name)
        {
            generatenewdomains(name)
        })

        commander
        .command('get-common <name>')
        .description('Get Common Domain Names')
        .alias('g-c')
        .action(function (name)
                {
                    generatecommondomains(name)
                })

                commander
                .command('get-suffix <name>')
                .description('Get suffix for Domain')
                .alias('g-s')
                .action(function (name)
                        {
                            generateSuffixDomains(name)
                        })
                        commander
                        .command('get-subdomain <name>')
                        .description('Get SubDomain Names')
                        .alias('g-sub')
                        .action(function (name)
                                {
                                    generateSubDomains(name)
                                })
                                commander
                                .command('generateandsave <name>')
                                .description('Generate All Domain Names and save to json file')
                                .alias('g-ns')
                                .action(function (name)
                                        {
                                            generateAndSaveDomains(name)
                                        })
commander.parse(process.argv);