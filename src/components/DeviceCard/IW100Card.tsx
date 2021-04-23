// 功率检测插座
import React from 'react';
import { Switch } from 'antd';

import LiquidBall from '@/components/LiquidBall';
import { DeviceType } from '@/ts/type';
import IconFlashOn from '@/assets/svg/flash-on.svg';
import IconFlashOff from '@/assets/svg/flash-off.svg';
import IconRefresh from '@/assets/svg/refresh.svg';
import { getIconByDeviceType } from '@/utils';
import style from './card.less';

interface IW100CardProps {
    deviceData: {
        online: boolean;
        type: DeviceType;
        name: string;
    };
    channel: {
        stat: boolean;
        name: string;
    };
    ballData: {
        title: string;
        content: string;
    }[];
}

const IW100Card: React.FC<IW100CardProps> = ({ deviceData, channel, ballData }) => {
    return (
        <div className={style['card']}>
            <div className={style['info-refresh']}>
                <div className={style['info-icon']}>
                    <img src={getIconByDeviceType(deviceData.type, deviceData.online)} />
                </div>
                <span className={style['device-name']}>{deviceData.name}</span>
                <div className={style['refresh-icon']}>
                    <img src={IconRefresh} width="30" height="30" />
                </div>
            </div>
            <div className={style['triple-box']}>
                {
                    // 三个一排的水波球
                    ballData.map((data, i) => {
                        return (
                            <LiquidBall
                                key={i}
                                size="small"
                                type={i === 0 ? 'blue' : i === 1 ? 'green' : i === 2 ? 'yellow' : 'blue'}
                                title={data.title}
                                content={data.content}
                            />
                        );
                    })
                }
            </div>
            <div className={style['channel']}>
                <div className={style['channel-icon']}>
                    {
                        channel.stat ? <img src={IconFlashOn} /> : <img src={IconFlashOff} />
                    }
                </div>
                <span className={style['channel-name']}>{channel.name}</span>
                <Switch checked={channel.stat} />
            </div>
        </div>
    );
};

export default IW100Card;
