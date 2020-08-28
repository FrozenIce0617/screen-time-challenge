import React, { useCallback, useEffect, useState } from 'react';
import { NativeModules } from 'react-native';
import _ from 'lodash';

import { msToTime } from '../../helpers/timeHelper';
import * as Styled from './MainView.style';

const UsageStats = NativeModules.UsageStats;
const options = ['Today', 'Last 7 days'];

const MainView = ({ theme, onSwitchTheme }) => {
  const [stats, setStats] = useState([]);
  const [activeItem, setActiveItem] = useState(options[0]);
  const [durationInDays, setDurationInDays] = useState(1);

  useEffect(() => {
    getStats();
  }, []);

  const parseStats = useCallback(unparsed => {
    const appsAndTimes = unparsed.split(';');
    const times = appsAndTimes[1].split(',').map(val => parseInt(val));
    const apps = appsAndTimes[0].split(',').map(name => name.split('.').pop());
    const parsedStats = [];

    for (let i = 0; i < apps.length; i++) {
      parsedStats.push({ name: apps[i], time: times[i] });
    }

    return parsedStats;
  }, []);

  const getStats = useCallback(() => {
    UsageStats.getStats(durationInDays, message => {
      const stats = parseStats(message);
      setStats(stats);
    });
  }, [durationInDays]);

  const getStatsComponents = useCallback(() => {
    return _.sortBy(stats, ['time'])
      .reverse()
      .slice(0, 5)
      .map((stat, idx) => (
        <Styled.StatWrapper key={`app-${stat.name}-${idx}`}>
          <Styled.StatAppName>{stat.name}</Styled.StatAppName>
          <Styled.StatTime>{msToTime(stat.time)}</Styled.StatTime>
        </Styled.StatWrapper>
      ));
  }, [stats]);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Typography>Screen Time</Styled.Typography>
        <Styled.Button onPress={onSwitchTheme}>
          <Styled.Typography>{theme === 'DARK' ? '☀️' : '🌙'}</Styled.Typography>
        </Styled.Button>
      </Styled.Header>
      <Styled.ButtonContainer>
        {options.map(option => (
          <Styled.RadioButton
            key={option}
            isActive={option === activeItem}
            onPress={() => {
              setDurationInDays(option === options[0] ? 7 : 1);
              setActiveItem(option);
              getStats();
            }}
          >
            <Styled.ButtonText isActive={option === activeItem}>{option}</Styled.ButtonText>
          </Styled.RadioButton>
        ))}
      </Styled.ButtonContainer>
      <Styled.StatsContainer>{getStatsComponents()}</Styled.StatsContainer>
    </Styled.Container>
  );
};

export default MainView;
