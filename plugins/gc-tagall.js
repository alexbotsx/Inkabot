let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `@inkaikos_ff:  ${pesan}`
  let teks = `*⺀🟡𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟⺀*
   ${oi}\n\n ⚫𝗜𝗡𝗞𝗔𝗜𝗞𝗢𝗦—𝗕𝗢𝗧 🟡\n`
  for (let mem of participants) {
  teks += `🟡➤ @${mem.id.split('@')[0]}\n`}
  teks += `└ 𝗜𝗡𝗞𝗔𝗜𝗞𝗢𝗦 `
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler