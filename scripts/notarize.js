const { notarize } = require('@electron/notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;  
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;
  console.log("path", `${appOutDir}/${appName}` +".app")
try {

  return await notarize({
    appBundleId: 'my-electron-app',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: "",
    appleIdPassword: "",
  });
} catch (e) {
  console.log("error", e)
}
};