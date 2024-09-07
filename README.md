- Prevent Back click
- Prevent copy paste
- Overwrite common keyboard short cuts
	- Tab switching cmd + numb
	- Focus URL cmd + L
	- Disable Search cmd + F
- Disable/overwrite Right click
- Scroll Jacking
- Launch applications 
- Disable dev tools
- Auto Play Audio
- Auto Download
- Site notifications
- Spam cookie requests
- Video Ad to follow user
- Custom tool tip
- Prevent open in new tab
- OS based download options
- Auto full screen


uBlock Rules
```
! Disable Prevent Back Click
*##+js(set, History.prototype.pushState, noopFunc)
```