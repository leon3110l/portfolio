import React from "react"

import Page from '../components/Page'
import {Row} from "../components/Grid"
import Project from "../components/Project"
import projects from "../projects.json"

export default class ProjectsView extends React.Component {
    render() {
        return (
            <Page>
                <h1>Projects</h1>
                <Row>
                    {projects.map((e, i) => <Project xs={12} sm={6} md={4} lg={3} key={i} data={e}/>)}
                </Row>
            </Page>
        )
    }
}