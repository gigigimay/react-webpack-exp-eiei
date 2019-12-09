/**
 * Webpack configuration for development
 */
import path from 'path'

export default {
  entry: path.join(process.cwd(), 'src/index'),
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public', 'js'),
  },
}
