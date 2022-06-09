



RegisterCommand('vote', function()
    TriggerEvent('open:voting')
end)







local display = false


RegisterNetEvent("open:voting")
AddEventHandler("open:voting", function()
    SetDisplay(not display)
end)   



function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end





RegisterNUICallback("exit", function(data)
    SetDisplay(false)
end)


RegisterNUICallback("main", function(data)
    SetDisplay(false)
end)


RegisterNUICallback("error", function(data)
    SetDisplay(false)
end)










--[[

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)

        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)


-]]

