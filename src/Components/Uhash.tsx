
export default function Uhash() {
  return (
   String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g,'')
  )
}
