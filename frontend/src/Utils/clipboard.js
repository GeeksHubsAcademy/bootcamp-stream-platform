export async function copyToClipboard(text) {

    const result = await window.navigator.permissions.query({ name: 'clipboard-write' });
      if (result.state == 'granted' || result.state == 'prompt') {
         await  navigator.clipboard.writeText(text);
      } else {
          throw 'no user permisión to write to clipboard';
      }
}