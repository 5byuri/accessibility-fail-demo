import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')

await rm(dist, { recursive: true, force: true })
await mkdir(path.join(dist, 'assets'), { recursive: true })

await cp(path.join(root, 'assets'), path.join(dist, 'assets'), {
  recursive: true,
})
await cp(path.join(root, 'styles.css'), path.join(dist, 'styles.css'))
await cp(path.join(root, 'bad-ui.js'), path.join(dist, 'bad-ui.js'))

const allInOne = await readFile(
  path.join(root, 'pages', 'all-in-one.html'),
  'utf8',
)

const indexHtml = allInOne
  .replaceAll('../styles.css', 'styles.css')
  .replaceAll('../bad-ui.js', 'bad-ui.js')
  .replaceAll('../assets/', 'assets/')
  .replace(
    /<nav class="demo-nav" aria-label="Demo pages">[\s\S]*?<\/nav>\n/,
    '',
  )

await writeFile(path.join(dist, 'index.html'), indexHtml)
