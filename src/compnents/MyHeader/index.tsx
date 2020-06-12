import React from 'react';
import ReactDOM from 'react-dom';
import Sizes, {
    Colors,
    Column, Header,
    Icon,
    Icons, NavigationDrawer, NavigationDrawerVariants,
    Placeholder,
    Row,
    SafeArea,
    Scaffold, Section,
    Spacer,
    Spacings, TextButton
} from "@polestar/component-warehouse-react";

export class MyHeader extends React.Component {
    render() {
        return (
            <Scaffold
                header={
                    <Header
                        actions={
                            <Row>
                                <Icon icon={Icons.keylock} onClick={action("Icon.keylock onClick")} />
                                <Spacer
                                    orientation={Orientations.horizontal}
                                    spacing={Spacings.xSmall}
                                />
                                <Icon
                                    icon={Icons.externalLink}
                                    onClick={action("Icon.externalink onClick")}
                                />
                            </Row>
                        }
                    />
                }
            >
                <SafeArea>
                    <Section>
                        <Column>
                            <Placeholder width="100%" height="15vh" />
                            <Spacer spacing={Spacings.xLarge} />
                            <Placeholder width="100%" height="15vh" />
                            <Spacer spacing={Spacings.xLarge} />
                            <Placeholder width="100%" height="15vh" />
                        </Column>
                    </Section>
                </SafeArea>
            </Scaffold>);
    }
}
