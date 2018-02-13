import * as React from 'react'

type ComponentChunkLoader = () => any // todo: define return type properly

export enum Context {
  Main = 'Main',
  About = 'About'
}

const CONTEXT_LOADERS: { [name: string]: ComponentChunkLoader } = {
  [Context.Main]: () => import('../../pages/Main/Main'),
  [Context.About]: () => import('../../pages/About/About')
}

interface Props {
  contextName: Context
}

interface State {
  Component: React.ComponentClass<{}> | React.StatelessComponent<{}> | null
}

class ComponentLoader extends React.PureComponent<Props, State> {

  state: State = {
    Component: null
  }

  async componentDidMount () {
    let module = await CONTEXT_LOADERS[this.props.contextName]()
    this.setState({
      Component: module.default
    })
  }

  render () {
    const Component = this.state.Component

    if (Component !== null) {
      return <Component/>
    }

    // todo: put a loader component here
    return <div>Loading component {this.props.contextName}...</div>
  }
}

export default ComponentLoader
