It's home assistant, you have most likely heard about it :)

I keep all my configuration for HASS as code under `config/`, so that I can nuke the instance if something odd happens, as HASS can sometimes become unstable.

For creating the configuration files, my method is basically:

  - Configure using UI
  - Copy from YAML editor
  - Remove from UI
  - Paste into configuration folder
  - Reload HASS

This ensures that my configuration files are always checked in this repository, and if something breaks, the hours I spent configuring is not lost.

For persistent data, such as statistics, I rely on HASS backup functionality and copy the backups to my Synology NAS.
