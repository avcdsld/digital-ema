/**
 * SHA256ハッシュを生成する
 * @param {string} message - ハッシュ対象の文字列
 * @returns {Promise<string>} - 16進数のハッシュ文字列
 */
export async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}
