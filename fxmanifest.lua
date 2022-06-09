fx_version 'adamant'

game 'gta5'


server_scripts {
	'server/main.lua',
    "@mysql-async/lib/MySQL.lua"
	
}

client_scripts {
	'client/main.lua'
}

ui_page "html/index.html"
files({
    'html/index.html',
    'html/index.js',
    'html/main.css',
    'html/Assets/user.png',
    'html/Assets/info.png',
    'html/Assets/votingicon.png'
})

