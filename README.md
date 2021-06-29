# Developing Discord Community

1. Setup a Server for your community via [Discord.com](https://www.discord.com).

# Developing Discord Application

2. Create Application in Discord Developer Area (browser).

3. Create Developer account on [AutoCode.com](https://www.autocode.com).

# Linking Discord Resource

4. Connect your `Discord Application` as Linked Resource (development mode first) under `Account` on Autocode.com

5. Use Client ID and Client Secret under OAuth2 from Discord Application Developer Area for Linked Resource.

6. Add Discord OAuth Redirect URL: [https://discord.events.stdlib.com/discord/auth](https://discord.events.stdlib.com/discord/auth/).

7. Create a Bot under Discord and use the Token for Linked Resource Setup.

# Adding Bot to Server

8. In the prompt, add Bot to Server with the permissions: Read Messages, Send Messages and Mention...

9. Complete the CAPTCHA confirmation that pops up afterwards.

# Creating AutoCode Project

10. Create an AutoCode project and create the file, `__main__.js` to the **functions** directory.

11. Copy and paste our messaging test source code into it.

# Adding Linked Discord Resource to AutoCode Project

12. Discord would be required as a Linked Resource to link it to the project.

# Setting up Discord Direct Messaging Test

13. Go to your **User Settings->Advanced** under **APP SETTINGS** to enable `Developer Mode`.

14. Enable Application Test Mode, provide the Application ID and select `Discord Proxy`.

15. Open a public channel, right-click on any user and click `Copy ID`.

16. Paste ID to the direct messaging test source code where `<ID>` is specified.

# Testing Discord Direct Messaging

17. Click `Run` at the right bottom of the screen under the Endpoint viewer.

18. If everything worked right, the specified user should get a direct message saying:

_Thanks <@<ID>>! for testing this implementation_

_You may now proceed to the next stage of the tutorial_

# Start Learning Javascript for Discord

19. Join our Javascript for Discord meetup that discusses how to extend Discord for client communities.

# Start Serving Clients

20. You would be among the first people to test Business Suite migration from Slack to Discord.
