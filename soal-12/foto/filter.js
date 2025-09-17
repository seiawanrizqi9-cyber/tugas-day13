export const filter1 = (foto) => foto.map(f => ({...f, filter: "filter 1"}))
export const filter2 = (foto) => foto.map(f => ({...f, filter: "filter 2"}))

export default function filterFoto(foto, text) {
    return foto.map(f => ({...f, filterFoto: text}))
}